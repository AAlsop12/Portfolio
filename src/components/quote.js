import React, {Component} from "react";


class Quote extends Component {
    render() {
        const { className, quote, author } = this.props;
        return (
            <div className={className}>
                {quote} 
                {author}
            </div>
        )
    }
}

export default Quote;



// export const Quotes = (list) => {
//     return (
//         <div>
//             {list.map(function(element){
//             console.log(element)
//             setTimeout((element) => {console.log("HHEHEHEHEHEH")}, 4000);
            
            
//             })}


//         </div>
//     )

// }


