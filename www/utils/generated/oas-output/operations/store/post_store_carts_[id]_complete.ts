/**
 * @oas [post] /store/carts/{id}/complete
 * operationId: PostCartsIdComplete
 * summary: Add Completes to Cart
 * description: Add a list of completes to a cart.
 * x-authenticated: false
 * parameters:
 *   - name: id
 *     in: path
 *     description: The cart's ID.
 *     required: true
 *     schema:
 *       type: string
 *   - name: expand
 *     in: query
 *     description: Comma-separated relations that should be expanded in the returned data.
 *     required: false
 *     schema:
 *       type: string
 *       title: expand
 *       description: Comma-separated relations that should be expanded in the returned data.
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *         fields. without prefix it will replace the entire default fields.
 *   - name: offset
 *     in: query
 *     description: The number of items to skip when retrieving a list.
 *     required: false
 *     schema:
 *       type: number
 *       title: offset
 *       description: The number of items to skip when retrieving a list.
 *   - name: limit
 *     in: query
 *     description: Limit the number of items returned in the list.
 *     required: false
 *     schema:
 *       type: number
 *       title: limit
 *       description: Limit the number of items returned in the list.
 *   - name: order
 *     in: query
 *     description: The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *     required: false
 *     schema:
 *       type: string
 *       title: order
 *       description: The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         description: SUMMARY
 *         properties:
 *           idempotency_key:
 *             type: string
 *             title: idempotency_key
 *             description: The cart's idempotency key.
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: curl -X POST '{backend_url}/store/carts/{id}/complete'
 * tags:
 *   - Carts
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           oneOf:
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - type
 *                 - cart
 *                 - error
 *               properties:
 *                 type:
 *                   type: string
 *                   title: type
 *                   description: The cart's type.
 *                 cart:
 *                   $ref: "#/components/schemas/StoreCart"
 *                 error:
 *                   type: object
 *                   description: The cart's error.
 *                   required:
 *                     - message
 *                     - name
 *                     - type
 *                   properties:
 *                     message:
 *                       type: string
 *                       title: message
 *                       description: The error's message.
 *                     name:
 *                       type: string
 *                       title: name
 *                       description: The error's name.
 *                     type:
 *                       type: string
 *                       title: type
 *                       description: The error's type.
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - type
 *                 - order
 *               properties:
 *                 type:
 *                   type: string
 *                   title: type
 *                   description: The cart's type.
 *                 order:
 *                   $ref: "#/components/schemas/StoreOrder"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * x-workflow: completeCartWorkflow
 * 
*/

