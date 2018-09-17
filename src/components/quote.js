import React, {Component} from "react";


class Quote extends Component {
    render() {
        const { className, quote } = this.props;
        return (
            <div className={className}>
                {quote}
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


