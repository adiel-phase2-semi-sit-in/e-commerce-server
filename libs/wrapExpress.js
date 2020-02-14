export default function wrapExpress(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}
