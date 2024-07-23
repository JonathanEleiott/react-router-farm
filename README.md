# React Router

- allows the user to refresh the page without starting back at the beginning

## Basics

- 2 types of Routers
  - Hash Router
    - use URL hash
    - no limitations on supported browsers
    - does not server requests
    - uses a '/#/' to separate client side from server request
  - Browser Router
    - uses history API
    - unavailable in legacy browsers
    - clean looking route in the URL bar
    - may mess up server requests if server is not set up properly
- Routes - contains all the Route components
- Route - specifies which paths will match with which components
  - <Route path='/path' element={<Component />} />
- Link - anchor tag that changes the URL bar to teh specified route
  - <Link to='/path'>Text</Link>
- useParams() - retrieves the variables from the url path
  - returns an object