import { nanoid } from 'nanoid';
import redis from 'lib/redis';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    try {
      const { comment, date, email, name, picture, postUrl, token } = req.body;

      if (token && req.cookies && req.cookies['auth0.is.authenticated'] === 'true') {
        const newCommentItem = {
          comment,
          date,
          email,
          id: nanoid(),
          name,
          picture
        };

        await redis.lpush(postUrl, JSON.stringify(newCommentItem));

        return res.status(200).json({
          comment: newCommentItem,
          success: true
        });
      } else {
        return res.status(400).send({
          message: 'Authentication failed',
          success: false
        });
      }
    } catch (err) {
      return res.status(400).send({
        message: err.message,
        success: false
      });
    }

  } else {
    try {
      const { postUrl } = req.query;

      if (postUrl) {
        const response = await redis.lrange(postUrl, 0, -1);
        const comments = response.map((comment) => JSON.parse(comment));

        return res.status(200).json({
          comments,
          success: true,
        });
      } else {
        return res.status(400).send({
          message: 'Request url failed',
          success: false
        });
      }
    } catch (err) {
      return res.status(400).send({
        message: err.message,
        success: false
      });
    }
  }
}