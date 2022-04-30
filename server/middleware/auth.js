import jwt from "jsonwebtoken";

// User performs a request
// Ex: Clicks the like button => auth middleware() verifies the user and the request => continue with the request

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    // JWT token verification
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test"); // the security keyword must be the same as the one used while creeating the token

      req.userId = decodedData?.id;
    }
    // Google token verification
    else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default auth;
