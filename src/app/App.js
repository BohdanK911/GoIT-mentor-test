import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GITHUB_API_REPOS_PER_PAGE } from 'api';
import Input from 'components/Input';
import RepoCard from 'components/RepoCard';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
import { getRepos } from 'store/githubSlice';
import debounce from 'helpers/debounce';
import styles from './App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(null);
  const isLoading = useSelector(state => state.github.isLoading);
  const githubSearchData = useSelector(state => state.github.githubData);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const debounedInputChangeHandler = useCallback(
    debounce(search => {
      setPage(0);
      dispatch(getRepos({ search }));
    }, 800),
    []
  );

  const handleInputChange = ({ target }) => setInputValue(target.value);
  const handlePageChange = ({ selected }) => {
    setPage(selected);

    dispatch(getRepos({ search: inputValue, page: selected + 1 }));
  };

  useEffect(() => {
    if (inputRef?.current) inputRef.current.focus();
  }, [isLoading]);

  useEffect(() => {
    debounedInputChangeHandler(inputValue);
  }, [inputValue]);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Input
          name={'search'}
          placeholder={'Search'}
          value={inputValue}
          ref={inputRef}
          onChange={handleInputChange}
          isDisabled={isLoading}
        />
      </header>

      {!isLoading && githubSearchData ? (
        <main className={styles.mainWrapper}>
          <div className={styles.reposWrapper}>
            {githubSearchData.items.map(repo => (
              <RepoCard
                key={repo.full_name}
                name={repo.name}
                author={repo.owner.login}
                language={repo.language}
                description={repo.description}
                starsCount={repo.stargazers_count}
                watchersCount={repo.watchers_count}
              />
            ))}
          </div>

          {githubSearchData.total_count ? (
            <Pagination
              pageCount={Math.ceil(githubSearchData.total_count / GITHUB_API_REPOS_PER_PAGE)}
              forcePage={page}
              onPageChange={handlePageChange}
            />
          ) : (
            <p className={styles.noReposText}>​По Вашому запиту не знайдено жодного репозиторія</p>
          )}
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
