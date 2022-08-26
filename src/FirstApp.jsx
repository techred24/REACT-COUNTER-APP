import PropTypes from 'prop-types';
const newMessage = {
    message: 'Mensage',
    name: 'Rafael'
};
const getMessage = () => 'Message from function';
export function FirstApp( props ) {
    console.log(props, 'Properties');
    console.log(props.customObj, 'Custom Object');
    const { name: nombre } = props.customObj;
    return  <>
                <code>{ JSON.stringify(newMessage) }</code>
                <div> {getMessage()} </div>
                <p>First App</p>
                <h2> {props.title} </h2>
                <h2> {props.subtitle} </h2>
                <p> {nombre} </p>
            </>
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    // title: 'Untitled like my fav band'
}