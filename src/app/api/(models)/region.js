import mongoose, { Schema } from 'mongoose';

const regionSchema = new Schema({
	name: String,
	votes: Number
});

const Region = mongoose.model('Region', regionSchema);
export default Region;