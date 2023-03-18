Ejercicios de mesas en DH, realizado como práctica de manera individual.


<h1>Média de Alumnos por Disciplina</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="container_input">
                <select>
                    <option selected disabled>
                    Seleccione una disciplina
                    </option>
                    <option value="database">Base de Datos</option>
                    <option value="backend">Desarrollo Backend</option>
                    <option value="frontend">Desarrollo Frontend</option>
                    <option value="devops">Devops</option>
                </select>
                <input />
                </div>
                <input type="submit" value="Salvar"/>
            </form>

            <div className="container">
                <table border="1" className="line_title">
                <thead>
                    <tr>
                    <th>Disciplina</th>
                    <th>Cantidad de Alumnos</th>
                    <th>Calificaciones promedio de los estudiantes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Base de Datos</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>

                    <tr>
                    <td>Desarrollo Frontend</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>

                    <tr>
                    <td>Desarrollo Backend</td>
                    <td>0</td>
                    <td>0</td>
                    </tr>
                </tbody>
                </table>
            </div>