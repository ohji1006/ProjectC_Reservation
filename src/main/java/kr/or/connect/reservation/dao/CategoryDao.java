package kr.or.connect.reservation.dao;


import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;


import kr.or.connect.reservation.dto.Category;
import static kr.or.connect.reservation.dao.CategorySql.*;
//import static kr.or.connect.daoexam.dao.RoleDaoSqls.*;

@Repository
public class CategoryDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<Category> rowMapper = BeanPropertyRowMapper.newInstance(Category.class);
	
	public CategoryDao(DataSource dataSource) {
		jdbc = new NamedParameterJdbcTemplate(dataSource);
	}
	
	public List<Category> selectAll() {
		try {
			return jdbc.query(SELECT_ALL_WITH_COUNT, Collections.emptyMap(), rowMapper);
		}catch (EmptyResultDataAccessException e) {
			// TODO: handle exception
			return null;
		}
	}
}
