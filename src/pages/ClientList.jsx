import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function ClientList() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      setLoading(true)
      const endpoint = import.meta.env.VITE_API_URL + "/clients"
      const response = await axios.get(endpoint)
      const clients = response.data.body.data
      setClients(clients)
      setLoading(false)
      console.log(clients)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Code</Th>
              <Th>Email</Th>
              <Th>Country</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Td>Loading...</Td>
            ) : error ? (
              <Td>Error: {error.message}</Td>
            ) : (
              clients.map((client) => (
                <Tr key={client.code}>
                  <Td className="client-name">
                    <Link to={`${client.cod_cliente}`}>
                      {client.des_nombre_cliente}
                    </Link>
                  </Td>
                  <Td>{client.cod_cliente}</Td>
                  <Td>{client.des_email}</Td>
                  <Td>{client.cod_pais}</Td>
                  <Td>{client.des_direccion}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ClientList
