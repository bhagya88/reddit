export default function posts(state =[], action = {}){

	switch(action.type){

		case 'SET_POSTS' :
		     return action.posts;

		case 'ADD_COMMENT' :

		    var newState = state.map(function(post){

		    	var newPost = Object.assign({},post);

		    	if(newPost._id === action.id){
		    	
		    		newPost.comments = post.comments.concat(action.comment);
		    	}

		    	return newPost;
		    });


			return newState;

			case 'ADD_POST':
			    var id = new Date().getTime();
				var newState = state.concat(action.post);

				return newState;
			default:
			  return state;
	}

	return state;
}