import styled from 'styled-components';

export const Loading = styled.div.attrs((props) => ({
  className: props.className,
}))`
  & .circle {
    border: 3px solid #3bc9db;
    width: 200px;
    height: 200px;
    /*box-shadow:0px 0px 10px #3bc9db;*/
    /*Uncomment to create a nice effect ;) */
    border-radius: 100px;
  }

  & .rectangle {
    background: #111;
    width: 230px;
    height: 140px;
    position: relative;
    top: -172px;
    /* -webkit-animation:spin 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite; */
  }
  /* @-webkit-keyframes spin{
	0%{transform:rotateZ(0deg);}
	100%{transform:rotateZ(360deg);}
}
} */

  & .text {
    color: white;
    font-family: Arial;
    font-size: 20px;
    position: relative;
    top: -255px;
  }
`;
