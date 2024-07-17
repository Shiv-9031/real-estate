import Registration from "../model/Registration.mjs";

export const userRegistration = async (req, res, next) => {
  try {
    const user = await new Registration(req.body);

    const isExistedUser = await Registration.find({
      Email: req.body.Email,
      Phone: req.body.Phone,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "registration is complete",
      otp: "otp",
    });
  } catch (e) {
    res.status(404).json({
      err: e,
    });
  }
};
