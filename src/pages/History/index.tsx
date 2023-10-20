import * as styled from "./styles"

export const History = () => {
  return (
    <styled.HistoryContainer>
      <h1>Meu histórico</h1>

      <styled.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>
            <tr>
              <td>tAREFA</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <styled.Status statusColor="red">Concluído</styled.Status>
              </td>
            </tr>

          </tbody>
        </table>
      </styled.HistoryList>
    </styled.HistoryContainer>
  )
}

