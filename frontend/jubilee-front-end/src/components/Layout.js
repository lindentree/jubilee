import React , {useEffect ,useRef} from 'react';
import Search from './Search';
import Display from './Display'
import data from '../data/data.json';
import Recommendation from './Recommendation';
 
class Parent extends React.Component {
     constructor(props){
         super(props);
         this.state={
             mysong : []
         }
         this.search = this.search.bind(this);    
     }

     search (lyrics) {
         
         const song = data.filter((item )=>{
            if(item["Lyrics"].toLowerCase().includes(lyrics)){
             return item["Lyrics"];
            }
          });
          this.setState({mysong:song})
        console.log(this.state.mysong,'this is the match song');
      }

     render(){
         return(
             <div>
                <Search search = {this.search}></Search>
                <Display ref={this.myRef} filtersong = {this.state.mysong}></Display>
             </div>
         );
     }
}

export default Parent;