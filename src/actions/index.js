import Prismic from 'prismic-javascript';
import { FETCH_PROJECTS, FETCH_PROJECT } from "./types";

const apiEndpoint = 'https://webdevdude.prismic.io/api/v2';
const accessToken = 'MC5XNUdLbVNZQUFMREppVlVO.Wj0777-977-9V3UTVGXvv73vv71lO--_ve-_vTgq77-977-977-977-9Ze-_ve-_vWtb77-977-977-9Ku-_vQ';

export const fetchProjects = () => async dispatch => {

  const api = await Prismic.api(apiEndpoint, { accessToken });

  const resp = await api.query(
    Prismic.Predicates.at('document.type', 'projects'),
    { orderings : '[document.first_publication_date desc]' }
  );

  dispatch({
    type: FETCH_PROJECTS,
    payload: resp
  });
};

export const fetchProject = (slug) => async dispatch => {
  const api = await Prismic.api(apiEndpoint, { accessToken });
  const resp = await api.query(
    Prismic.Predicates.at("document.tags", [slug])
  );

  dispatch({
    type: FETCH_PROJECT,
    payload: resp.results[0]
  });
};
