import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: string,
			required: true,
		},
		email: {
			type: string,
			required: true,
		},
		password: {
			type: string,
			required: true,
		},
		role: {
			type: string,
			enum: ["instructor", "student"],
			default: "student",
		},
		enrolledCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
		photoUrl: {
			type: string,
			default: "",
		},
	},
	{ timestamp: true }
);

export const User = mongoose.model("User", userSchema);
