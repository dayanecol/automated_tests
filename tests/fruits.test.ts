import supertest from "supertest";
import app from "../src/index";
import fruits from "data/fruits";

const api = supertest(app);

beforeEach (()=>{
    fruits.length=0;
})

describe('GET:/fruits',()=>{
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

    it('Deve retornar um array vazio',async()=>{
        
        const resultado = await api.get('/fruits');
        expect(resultado.status).toBe(200);
        expect(resultado.body).toEqual(
            expect.arrayContaining([])
        )
    })
})

describe('GET:/fruits/:id',()=>{
    it('Deve retornar o objeto fruit de id solicitado',async ()=>{
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
        const resultado = await api.get('/fruits/2');
        expect(resultado.body.id).toBe(2);
    })

    it('Deve retornar status 404',async ()=> {
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
          const resultado = await api.get('/fruits/3');
          console.log(resultado);
          expect(resultado.status).toBe(404);
    })

})

describe('POST:/fruits',()=>{
    it('Deve retornar status 201',async ()=>{
        const resultado = await api.post('/fruits').send({
            name: 'Abacaxi',
            price:2500
        });
        expect(resultado.status).toBe(201);
    })

    it('Deve retornar status 422',async ()=>{
        const resultado = await api.post('/fruits').send({
            name: 'Abacaxi'
        });
        expect(resultado.status).toBe(422);
    })
    it('Deve retornar status 409',async ()=>{
        fruits.push({   
            id: 1,
            name: "Abacaxi",
            price: 1000
          });
        const resultado = await api.post('/fruits').send({
            name: 'Abacaxi',
            price:2500
        });
        expect(resultado.status).toBe(409);
    })

})