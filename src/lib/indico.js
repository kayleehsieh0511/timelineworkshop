import $ from 'jquery';

export const emotion = (textArray) =>{
  return $.post(

    'https://apiv2.indico.io/emotion',
      JSON.stringify({
      'api_key': "b46f48ef2884a934d543aa006d8e4693",
      'data': `${text}`,
      'threshold': 0.1
    })
  ).then(function(res) { console.log(res) });



}
