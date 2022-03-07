const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.an('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  
  });
  
});
describe('quantos filmes existem no DB', () => {
  before(() => {
    const movie = {
      id: 1,
      tittle: 'Avatar',
      directed_by: 'James Cameron',
      release_year: 2009,
    }

    const result = [[movie], []];

    sinon.stub(connection, 'execute').resolves(result);
  })

  after(() => {
    connection.execute.restore();
  })

  it('retorna um array de objetos', async () => {
    const response = await MoviesModel.getAll();

    expect(response).to.be.an('array');
    expect(response).not.to.be.empty;
    response.forEach(m => expect(m).to.be.an('object'))
  })
  
  it('cada objeto no array deve ter as chaves id, tittle, directed_by, release_year', async () => {
    const response = await MoviesModel.getAll();

    expect(response).not.to.be.empty;
    response.forEach(m => expect(m).to.include.all.keys('id', 'tittle', 'directed_by', 'release_year'));
  })
})