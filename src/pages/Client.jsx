import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react"
function Client() {
  const [client, setClient] = useState({})
  const [recomendations, setRecomendations] = useState([])
  const { code } = useParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchClient()
  }, [])

  const fetchClient = async () => {
    try {
      const endpoint = import.meta.env.VITE_API_URL + "/clients/" + code
      const response = await axios.get(endpoint)
      const responseData = response.data.body.data
      if (responseData) {
        const clientData = responseData[0]
        setClient(clientData)
      }
      console.log(client)
    } catch (error) {
      console.log(error)
    }
  }

  const getRecomendations = async () => {
    setLoading(true)
    const endpoint =
      import.meta.env.VITE_API_URL + "/user/product-recomendation"
    const params = {
      cod_cliente: code,
      des_nombre_cliente: client.des_nombre_cliente,
    }
    const response = await axios.post(endpoint, params)
    const recomendations = response.data.body.data
    setRecomendations(recomendations)
    console.log(recomendations)
    setLoading(false)
  }
  return (
    <>
      <div className="card-container">
        <Card className="card-recomendation" onClick={getRecomendations}>
          <CardHeader>
            <Text>Product Recomendations</Text>
          </CardHeader>
          <CardBody>
            <Text>
              Personalized product suggestions based on client history, with
              explanations.
            </Text>
          </CardBody>
        </Card>
        <Card className="card-recomendation">
          <CardHeader>
            <Text>Tips and Routines</Text>
          </CardHeader>
          <CardBody>
            <Text>Advice on using recommended and other brand products.</Text>
          </CardBody>
        </Card>
        <Card className="card-recomendation">
          <CardHeader>
            <Text>Social Network Copy</Text>
          </CardHeader>
          <CardBody>
            <Text>Optimized suggestions for social media posts</Text>
          </CardBody>
        </Card>
      </div>
      <div className="result-response">
        <Card>
          <CardBody>
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <Text>
                {recomendations.map((recomendation, index) => (
                  <Text key={recomendation.suggestedProduct.producto}>
                    {index + 1}.{" "}
                    <strong>{recomendation.suggestedProduct.marca}</strong> -{" "}
                    {recomendation.suggestedProduct.producto} <br />
                    Recomendation: {recomendation.reason}
                  </Text>
                ))}
              </Text>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Client
