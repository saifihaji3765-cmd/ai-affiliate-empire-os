import express from "express";

const router = express.Router();

/*
  AI CONTENT GENERATOR
  Temporary mock AI response.
  Later connect OpenAI/Gemini/Groq APIs.
*/

router.post("/generate", async (req, res) => {
  try {
    const {
      niche,
      platform,
      contentType
    } = req.body;

    if (!niche || !platform || !contentType) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    let generatedContent = "";

    /*
      SIMPLE MOCK RESPONSES
    */

    if (contentType === "caption") {
      generatedContent = `
🚀 Discover the power of ${niche} with this amazing ${platform} offer.

🔥 Start today and unlock massive opportunities.

#AI #AffiliateMarketing #PassiveIncome
      `;
    }

    if (contentType === "script") {
      generatedContent = `
HOOK:
This AI tool is changing everything.

BODY:
People are using this ${niche} system to automate work and scale faster.

CTA:
Check the link now before everyone discovers it.
      `;
    }

    if (contentType === "blog") {
      generatedContent = `
Top ${niche} Tools You Should Use in 2026

AI-powered systems are rapidly transforming how businesses scale online. In this article we explore the best tools and affiliate opportunities available today.
      `;
    }

    return res.status(200).json({
      success: true,
      content: generatedContent
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "AI generation failed"
    });
  }
});

export default router;
