import profileReducer, { addPostActionCreator } from './profileReducer';



test('length of posts should ', () => {
    // 1. test data
    let action = addPostActionCreator('it-ez-ark');
    let state ={
     
        posts: [
          { id: 1, message: 'hi gayz', likesCount: 12 },
          { id: 2, message: 'hi gayz mayz', likesCount: 13 },
          { id: 3, message: 'hi dudu', likesCount: 14 },
          { id: 4, message: 'hi gara dada', likesCount: 15 },
        ]
      }
    //   2. action
    let newState = profileReducer(state,action)
    
    // 3. expectation
    expect(newState.posts.length).toBe(5);

  });






