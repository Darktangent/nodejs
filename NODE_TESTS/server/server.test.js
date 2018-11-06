const request=require('supertest')
var app=require('./server').app
const expect= require('expect')


describe('Server',()=>{
    it('should return hello world response',(done)=>{

        request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error: 'Page not found'
            })
    
        })
        .end(done)
    })
})


describe('GET /users',()=>{
    
    it('should return object of user with name and age',(done)=>{

        request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({
                name:'Rohan',
                age:25
            })
        })
        .end(done)
    })
    
})


