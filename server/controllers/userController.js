import sql from "../config/neondb.js";

const getUserCreations = async (req, res) => {
  try {
    const { userId } = req.auth();

    const creations =
      await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;

    res.status(200).json({
      success: true,
      creations,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getPublishCreations = async (req, res) => {
  try {

    const creations =
      await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;

    res.status(200).json({
      success: true,
      creations,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const toggleLikeCreations = async (req, res) => {
  try {

    const {userId} = req.auth();
    const {id} = req.body;

    const [creation] = await sql`SELECT * FROM creations WHERE id=${id}`;

    if(!creation) {
        return res.status(404).json({ success : false, message : "Creations not found"})
    }

    const currentLikes = creation.likes;

    const userIdStr = userId.toString();

    let updatedLikes;
    let message;

    if(currentLikes.includes(userIdStr)) {
        updatedLikes = currentLikes.filter((user) => user !== userIdStr);
        message = 'Creation Unliked';
    } else {
        updatedLikes = [...currentLikes, userIdStr];
        message = 'Creation Liked'
    }

    const formattedArray = `{${updatedLikes.join(',')}}`;

      await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

    res.status(200).json({
      success: true,
      message
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export {getUserCreations, getPublishCreations, toggleLikeCreations}