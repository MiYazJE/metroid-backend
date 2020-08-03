import mongoose from "mongoose";

export class Database{
  private host: string;
  private database: string;
  private port: string;

  constructor(){
    this.host = process.env.DATABASE_HOST || "localhost";
    this.database = process.env.DATABASE_NAME || "test";
    this.port = process.env.DATABASE_PORT || "27017";
  }

  public connected(): void{
    try{
      mongoose.connect(`mongodb://${this.host}:${this.port}/${this.database}`, {
	useCreateIndex: true,
	useUnifiedTopology: true,
	useNewUrlParser: true
      })
	.then(connection => {
	  console.log("Database is connected!");
	})
	.catch(err => {
	  console.error(err);
	});
    } catch (e){
      console.error(e);
    }
  }
}
