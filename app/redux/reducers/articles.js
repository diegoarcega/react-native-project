
export default function articlesReducer(articles = [], action) {
	switch(action.type){
		case 'UPDATE_FROM_API':
			return action.articles
		default:
			return articles
	}
};
