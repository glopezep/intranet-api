const uuid = require('uuid/v4')

function getProjectCategory () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'ProjectCategory 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getProject () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Lorem 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    imageURL: 'http://intranet.test/uploads/8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    extURL: 'http://extlink.test/',
    projectCategoryId: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8'
  }
}

function getOffice () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Office 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    number: '8091112222',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getPosition () {
  const id = uuid()
  return {
    id,
    name: `Position ${id}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getUser () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    fullname: `Jhon Doe 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8`,
    username: `jhondoe-8bdafc78-5090-4b91-ab22-d0b3ef3fabf8}`,
    password: 'password123456',
    extensionNumber: 1234,
    email: `jhondoe8bdafc78-5090-4b91-ab22-d0b3ef3fabf8@test.com`
  }
}

function getDocumentCategory () {
  const id = uuid()
  return {
    id,
    name: `Document Category ${id}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getDepartment () {
  const id = uuid()
  return {
    id,
    name: `Document Category ${id}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getDocument () {
  const id = uuid()
  return {
    id,
    name: `Document Category ${id}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    fileURL: `http://intranet.test/uploads/${id}`,
    extension: 'pdf'
  }
}

function getOffices () {
  return [
    getOffice(),
    getOffice(),
    getOffice()
  ]
}

function getProjects () {
  return [
    getProject(),
    getProject(),
    getProject()
  ]
}

function getPositions () {
  return [
    getPosition(),
    getPosition(),
    getPosition()
  ]
}

function getDocumentCategories () {
  return [
    getDocumentCategory(),
    getDocumentCategory(),
    getDocumentCategory()
  ]
}

function getDepartments () {
  return [
    getDepartment(),
    getDepartment(),
    getDepartment()
  ]
}

function getDocuments () {
  return [
    getDocument(),
    getDocument(),
    getDocument()
  ]
}

module.exports = {
  getProjectCategory,
  getProject,
  getOffice,
  getPosition,
  getUser,
  getDocumentCategory,
  getDepartment,
  getDocument,
  getProjects,
  getOffices,
  getPositions,
  getDocumentCategories,
  getDepartments,
  getDocuments
}
