/**
 * Created by jiaojiaodebook on 17/1/18.
 */
import {CombineReducers} from 'redux';
import list from '../components/Home/PreviewListRedux';

export default CombineReducers({
  list,
});

export * as listActions from '../components/Home/PreviewListRedux';