import React from 'react';
import { MockedResponse } from '@apollo/client/testing';

import mockUser from '@/tests/mockData/user';

import { loader } from 'graphql.macro';
import { GetUserByLoginQuery } from '@/types/graphql';
const GetUserByLogin = loader('./../../graphql/queries/getUser.graphql');


const mockResponse: MockedResponse<GetUserByLoginQuery>[] = [
    {
        request: {
            query: GetUserByLogin,
            variables: { login: 'octocat' },
        },
        result: {
            data: {
                user: mockUser
            },
        },
    },
];

export default mockResponse;
