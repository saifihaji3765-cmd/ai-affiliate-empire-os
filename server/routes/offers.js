import express from "express";

const router = express.Router();

/*
  Temporary in-memory offers storage.
  Later replace with Supabase/PostgreSQL.
*/
let offers = [
  {
    id: 1,
    title: "AI Writing Tool",
    platform: "Digistore24",
    niche: "AI",
    commission: 420
  },
  {
    id: 2,
    title: "Trading Masterclass",
    platform: "ClickBank",
    niche: "Finance",
    commission: 280
  }
];

/*
  GET ALL OFFERS
*/
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    offers
  });
});

/*
  CREATE OFFER
*/
router.post("/", (req, res) => {
  try {
    const {
      title,
      platform,
      niche,
      commission
    } = req.body;

    if (
      !title ||
      !platform ||
      !niche ||
      !commission
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newOffer = {
      id: Date.now(),
      title,
      platform,
      niche,
      commission
    };

    offers.push(newOffer);

    return res.status(201).json({
      success: true,
      message: "Offer created successfully",
      offer: newOffer
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/*
  DELETE OFFER
*/
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    offers = offers.filter(
      (offer) => offer.id !== Number(id)
    );

    return res.status(200).json({
      success: true,
      message: "Offer deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

export default router;
