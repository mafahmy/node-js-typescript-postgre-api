import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("SELECT * FROM users");
    console.log(response.rows);
    return res.status(201).send(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );

    if (response.rowCount === 0) {
      return res.status(401).send("no user found");
    } else return res.json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal server error");
  }
};
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email } = req.body;
    await pool.query("INSERT INTO users (name, email) values($1, $2)", [
      name,
      email,
    ]);

    return res.send({
      message: "user created",
      body: {
        name,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("internal error");
  }
};
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[name, email, id]);
    return res.status(201).send(`user ${id} updated `)
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users WHERE id = $1',[id]);
    return res.status(200).send(`user ${id} deleted`);
  } catch (error) {
    return res.status(500).send('error');
  }
}
