import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:Jooj01@localhost:3306/encurtador')

export default sequelize;