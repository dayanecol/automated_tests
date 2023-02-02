import supertest from "supertest";
import app from "../src/index";
import fruits from "data/fruits";
import { Fruit } from "repositories/fruits-repository";

const api = supertest(app);

beforeEach (()=>{
    fruits.length=0;
})

describe('/fruits',()=>{
    it('Deve retornar a lista de todas as frutas',async()=>{
        fruits.push({   
            id: 1,
            name: "Banana",
            price: 1000
          },
          {   
            id: 2,
            name: "Apple",
            price: 2000
          });
        const resultado = await api.get('/fruits');
        expect(resultado.status).toBe(200);
        expect(resultado.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining(
                    {
                        id: expect.any(Number),
                        name: expect.any(String),
                        price: expect.any(Number)
                    }
                )
            ])
        )
    })
})