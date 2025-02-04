/**
 * @schema AdminSalesChannel
 * type: object
 * description: The order's sales channel.
 * x-schemaName: AdminSalesChannel
 * required:
 *   - id
 *   - name
 *   - description
 *   - is_disabled
 *   - metadata
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The sales channel's ID.
 *   name:
 *     type: string
 *     title: name
 *     description: The sales channel's name.
 *   description:
 *     type: string
 *     title: description
 *     description: The sales channel's description.
 *   is_disabled:
 *     type: boolean
 *     title: is_disabled
 *     description: The sales channel's is disabled.
 *   metadata:
 *     type: object
 *     description: The sales channel's metadata.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The sales channel's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The sales channel's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The sales channel's deleted at.
 * 
*/

