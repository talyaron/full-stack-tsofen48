vote = new mongoose.Schema({
    with: Number,
    without: Number,
});
header = new mongoose.Schema({
    name: String,
    src: String,
    company: String,
    role: String,
});

exports.vote__model= mongoose.model("vote", vote);
exports.Header__model = mongoose.model("header", header);
