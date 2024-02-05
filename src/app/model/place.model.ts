
export class Place {

  private static idPlace: number = 0;

  private id: number;

  private title: string;

  private description: string;

  private imageUrl: string;

  private price: number;

  private idUser: number;



  constructor( title:string, description: string, imageUrl: string, price: number, idUser: number) {
    this.id = Place.idPlace++;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.idUser = idUser;
   
  }

  getId(){
    return this.id;
  }

  getTitle(){
    return this.title;
  }

  getDescription(){
    return this.description;
  }


  getImageUrl(){
    return this.imageUrl;
  }

  getPrice(){
    return this.price;
  }

  getIdUser(){
    return this.idUser;
  }
  
}
