import request from 'axios';

const actions = {
	getAll(){
		return (dispatch, getState) => {
      request('https://braziljs.org/api/list/articles')
        .then(data => {
          dispatch(actions.updateFromAPI(data.data.articles))
        });
		};
	},

  updateFromAPI(articles){
    return {
      type: 'UPDATE_FROM_API',
      articles
    }
  }
}

export default actions;
