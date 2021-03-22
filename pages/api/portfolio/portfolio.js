import { portfolio } from "../../../api/";

export default (req, res) => {
  res.status(200).json(portfolio);
};
