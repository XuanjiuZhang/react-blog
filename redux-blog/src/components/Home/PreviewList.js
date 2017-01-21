/**
 * Created by xuanjiu on 17/1/20.
 */
import React, {PropTypes, Component} from 'react';
import Preview from './Preview';

class PreviewList extends Component{
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    articleList: PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: PropTypes.func,
  };

  componentDidMount(){
    this.props.loadArticles();
  }

  render(){
    const { loading, error, articleList } = this.props;
    console.log('loading:' + loading);
    if(error){
      return <p className="message">Oops, somethin is wrong.</p>
    }

    if(loading){
      return <p className="message">Loading...</p>
    }

    return articleList.map(item => (
       <Preview {...item} key={item.id} />
    ));
  }
}

export default PreviewList;