const mongoose = require("mongoose"),
Course = require("./models/course");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/courses",);

Course.deleteMany({})
  .then(() => {
    return Course.create({
      title: "Artisan Bread Baking",
      description: "Master the art of crafting delicious bread from scratch.",
      cost: 35,
      maxStudents: 12
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Sushi Making Workshop",
      description: "Learn the secrets of creating authentic sushi rolls and nigiri.",
      cost: 50,
      maxStudents: 8
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Wine Appreciation Class",
      description: "Explore the world of wine and develop your palate like a sommelier.",
      cost: 40,
      maxStudents: 15
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Digital Photography Basics",
      description: "Capture stunning images with your camera and master photo editing techniques.",
      cost: 25,
      maxStudents: 20
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Thai Cooking Course",
      description: "Delve into the vibrant flavors of Thai cuisine and learn traditional recipes.",
      cost: 45,
      maxStudents: 10
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Yoga and Meditation Retreat",
      description: "Restore balance to your body and mind with daily yoga sessions and guided meditation.",
      cost: 55,
      maxStudents: 6
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Creative Writing Workshop",
      description: "Unlock your creativity and hone your writing skills with expert guidance.",
      cost: 30,
      maxStudents: 15
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Spanish Language Immersion",
      description: "Immerse yourself in the Spanish language and culture with intensive language classes.",
      cost: 50,
      maxStudents: 10
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Gardening and Plant Care Seminar",
      description: "Learn how to cultivate a thriving garden and care for indoor plants.",
      cost: 20,
      maxStudents: 25
    });
  })
  .then(course => console.log(course.title))
  .then(() => {
    return Course.create({
      title: "Introduction to Web Development",
      description: "Discover the fundamentals of web development and build your first website.",
      cost: 40,
      maxStudents: 12
    });
  })
  .then(course => console.log(course.title));
