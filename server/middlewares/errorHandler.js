const handleBadRequest = (res, message) => {
    res.status(400).json({ error: { message } });
  };
  
  const handleUnauthorized = (res, message) => {
    res.status(401).json({ error: { message } });
  };
  
  const handlePaymentRequired = (res, message) => {
    res.status(402).json({ error: { message } });
  };
  
  const handleForbidden = (res, message) => {
    res.status(403).json({ error: { message } });
  };
  
  const handleNotFound = (res, message) => {
    res.status(404).json({ error: { message } });
  };
  
  const handleInternalServerError = (res, message) => {
    res.status(500).json({ error: { message } });
  };
  
  try {
    // Logika atau kode yang mungkin menghasilkan kesalahan
  } catch (error) {
    // Tangani kesalahan sesuai dengan jenisnya
    if (error instanceof BadRequestError) {
      handleBadRequest(res, error.message);
    } else if (error instanceof UnauthorizedError) {
      handleUnauthorized(res, error.message);
    } else if (error instanceof PaymentRequiredError) {
      handlePaymentRequired(res, error.message);
    } else if (error instanceof ForbiddenError) {
      handleForbidden(res, error.message);
    } else if (error instanceof NotFoundError) {
      handleNotFound(res, error.message);
    } else {
      handleInternalServerError(res, error.message);
    }
  }