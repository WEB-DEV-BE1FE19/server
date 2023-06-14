const errHandler = (err, req, res, next) => {
	if (err.status === 400) {
		return res.status(400).json({ message: err.message });
	}

	if (err.status === 401) {
		return res.status(401).json({ message: err.message });
	}

	if (err.status === 402) {
		return res.status(402).json({ message: err.message });
	}

	if (err.status === 403) {
		return res.status(403).json({ message: err.message });
	}

	if (err.status === 404) {
		return res.status(404).json({ message: err.message });
	}

	if (err.status === 405) {
		return res.status(405).json({ message: err.message });
	}

	if (err.status === 406) {
		return res.status(406).json({ message: err.message });
	}

	else res.status(500).json({ message: "Kesalahan Server!" });
};

module.exports = errHandler;
