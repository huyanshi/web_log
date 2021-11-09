import Mock from "mockjs";
import documentsData from './mockData/mockDocuments.js'
 
Mock.setup({
    timeout:1000
})

Mock.mock(/\list/,documentsData)

