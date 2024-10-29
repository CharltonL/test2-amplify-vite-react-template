import { post } from 'aws-amplify/api';

async function Post() {
  try {
    const restOperation = post({
      apiName: 'test2API',
      path: '/pic',
      options: {
        body: {
          message: 'Mow the lawn'
        }
      }
    });

    const { body } = await restOperation.response;
    const response = await body.json();

    console.log('POST call succeeded');
    console.log(response);
  } catch (e: any) {
    console.log('POST call failed: ', e);
  }
}

export default Post