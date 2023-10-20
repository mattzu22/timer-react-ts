import { Play } from "phosphor-react";

import * as Styled from "./styles";

export const Home = () => {
  return (
    <Styled.HomeContainer>
      <form action="">
        <Styled.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <Styled.TaksInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto "
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="banana" />
          </datalist>

          <label htmlFor="minuteAmount">Durante</label>
          <Styled.MinutesAmountInput
            type="number"
            id="minuteAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </Styled.FormContainer>

        <Styled.CounterdowContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.CounterdowContainer>

        <Styled.StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </Styled.StartCountdownButton>
      </form>
    </Styled.HomeContainer>
  );
};
