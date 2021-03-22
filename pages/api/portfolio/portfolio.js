import { portfolio } from "../../../api/portfolio";

export default (req, res) => {
  res.status(200).json(portfolio);
};
