import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getUsers = async (req: Request, res: Response) => {
  const response: QueryResult = await pool.query('SELECT * FROM users'); 
  console.log(response.rows); 
  res.status(201).send(response.rows);
};
