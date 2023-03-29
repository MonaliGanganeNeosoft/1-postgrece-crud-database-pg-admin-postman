const { connectDb } = require("../Dbservices/connection");
const list = async (req, res, next) => {
  console.log(req);
  try {
    const emps = await connectDb(`SELECT * FROM emp`);
    res.send(emps);
  } catch (err) {
    console.log(err);
  }
};
const insert = async (req, res, next) => {
  console.log(req);
  // try {
  //   const emps = await connectDb(
  //     `INSERT INTO emp (id, name)
  //            VALUES (3, 'kajal')`
  //   );
  //   res.send(emps);
  // } catch (err) {
  //   console.log(err.message);
  // }
  try {
    const emps = await connectDb(
      `INSERT INTO emp (id, name,dataextra)  
             VALUES (4, 'kajal','${JSON.stringify({
               title: "nodelearn",
               dance: "great",
             })}')`
    );
    // res.send(emps);
    res.status(200).send({ data: emps, message: "insert query" });
    console.log(emps, "insert");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
const update = async (req, res, next) => {
  console.log(req);
  //   try {
  //     //     const emps = await connectDb(
  //     //       `UPDATE emp
  //     // SET name = 'vivek'
  //     // WHERE id = 4;`
  //     //     );

  //     const empupdate = req.body;
  //     const emps = await connectDb(
  //       `UPDATE emp
  // SET name = '${empupdate.name}'
  // WHERE id = ${empupdate.id};`
  //     );
  //     // res.send(emps);
  //     res.status(200).send({ data: emps, message: "update query" });
  //   } catch (err) {
  //     console.log(err.message);
  //     // res.send(emps);
  //   }

  try {
    //     const emps = await connectDb(
    //       `UPDATE emp
    // SET name = 'vivek'
    // WHERE id = 4;`
    //     );

    const empupdate = req.body;
    const emps = await connectDb(
      `UPDATE emp
SET name = '${empupdate.name}',dataextra='${JSON.stringify(
        empupdate.dataextra
      )}'
WHERE id = ${empupdate.id};`
    );
    // res.send(emps);
    res.status(200).send({ data: emps, message: "update query" });
  } catch (err) {
    console.log(err.message);
    // res.send(emps);
  }
};
const deletequery = async (req, res, next) => {
  console.log(req);
  try {
    const empdelete = req.body;
    const emps = await connectDb(
      //       `DELETE FROM emp
      // WHERE id = 4;`

      `DELETE FROM emp
WHERE id = ${empdelete.id};`
    );
    // res.send(emps, { message: "delete query" });
    res.status(200).send({ data: emps, message: "delete query" });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  list,
  insert,
  update,
  deletequery,
};
