/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {defineSecret} = require("firebase-functions/params");
const {GoogleGenerativeAI} = require("@google/generative-ai");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

// Define the Gemini API Key as a secret
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Do not initialize the SDK here. Instead, initialize it inside the function
// where the secret value is available.

exports.generateContent = onRequest(
    {
      cors: true, // Allow cross-origin requests
      secrets: [geminiApiKey], // Make the secret available to this function
    },
    async (req, res) => {
      // Initialize the GoogleGenerativeAI SDK inside the function
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

        const {prompt} = req.body;

        // 增加對 prompt 的檢查
        if (!prompt || prompt.trim() === "") {
          logger.warn("Prompt is empty or missing.");
          res.status(400).send({error: "Prompt is required."});
          return;
        }

        // For text-only input, use the gemini-pro model
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).send({
          message: "Successfully generated content.",
          data: text,
        });
      } catch (error) {
        logger.error("Error generating content:", error);
        res.status(500).send({
          error: "Internal Server Error while calling Gemini.",
          details: error.message,
        });
      }
    },
);
